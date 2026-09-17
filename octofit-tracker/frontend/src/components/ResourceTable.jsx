import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export default function ResourceTable({ endpoint, resource, title, description, columns }) {
  const [rows, setRows] = useState([])
  const [state, setState] = useState({ loading: true, error: '' })

  useEffect(() => {
    const controller = new AbortController()
    fetchCollection(endpoint, controller.signal)
      .then((items) => {
        setRows(items)
        setState({ loading: false, error: '' })
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setState({ loading: false, error: error.message })
      })
    return () => controller.abort()
  }, [endpoint, resource])

  return (
    <section className="resource-page">
      <div className="page-heading"><p className="eyebrow">OctoFit / {resource}</p><h1>{title}</h1><p>{description}</p></div>
      {state.loading && <div className="status">Loading {resource}...</div>}
      {state.error && <div className="status error">Unable to load {resource}: {state.error}</div>}
      {!state.loading && !state.error && rows.length === 0 && <div className="status">No {resource} found yet.</div>}
      {!state.loading && !state.error && rows.length > 0 && (
        <div className="table-wrap"><table><thead><tr>{columns.map(({ label }) => <th key={label}>{label}</th>)}</tr></thead><tbody>
          {rows.map((row, index) => <tr key={row._id || row.id || index}>{columns.map(({ key, label, render }) => <td key={label}>{render ? render(row) : row[key] ?? '—'}</td>)}</tr>)}
        </tbody></table></div>
      )}
    </section>
  )
}