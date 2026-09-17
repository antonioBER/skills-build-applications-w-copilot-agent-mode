import ResourceTable from './ResourceTable.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export default function Teams() {
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
    : '/api/teams/'

  return <ResourceTable endpoint={endpoint} resource="teams" title="Teams" description="Find your people and keep the momentum moving." columns={[
    { label: 'Team', key: 'name' }, { label: 'Captain', key: 'captain', render: (row) => row.captain?.name || '—' }, { label: 'Members', key: 'members', render: (row) => Array.isArray(row.members) ? row.members.length : row.memberCount ?? '—' },
  ]} />
}