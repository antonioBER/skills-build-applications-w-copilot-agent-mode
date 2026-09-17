import ResourceTable from './ResourceTable.jsx'

export default function Activities() {
  return <ResourceTable resource="activities" title="Activity log" description="Recent movement across the OctoFit community." columns={[
    { label: 'Activity', key: 'type' }, { label: 'Duration', key: 'duration' }, { label: 'Distance', key: 'distance' }, { label: 'Completed', key: 'completedAt' },
  ]} />
}