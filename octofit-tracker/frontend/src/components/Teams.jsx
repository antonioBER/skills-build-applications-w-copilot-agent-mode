import ResourceTable from './ResourceTable.jsx'

export default function Teams() {
  return <ResourceTable resource="teams" title="Teams" description="Find your people and keep the momentum moving." columns={[
    { label: 'Team', key: 'name' }, { label: 'Captain', key: 'captain', render: (row) => row.captain?.name || '—' }, { label: 'Members', key: 'members', render: (row) => Array.isArray(row.members) ? row.members.length : row.memberCount ?? '—' },
  ]} />
}