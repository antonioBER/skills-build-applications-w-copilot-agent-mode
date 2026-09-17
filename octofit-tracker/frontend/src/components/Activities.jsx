import ResourceTable from './ResourceTable.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export default function Activities() {
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
    : '/api/activities/'

  return <ResourceTable endpoint={endpoint} resource="activities" title="Activity log" description="Recent movement across the OctoFit community." columns={[
    { label: 'Activity', key: 'type' }, { label: 'Duration', key: 'duration' }, { label: 'Distance', key: 'distance' }, { label: 'Completed', key: 'completedAt' },
  ]} />
}