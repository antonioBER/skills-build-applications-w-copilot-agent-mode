import ResourceTable from './ResourceTable.jsx'

export default function Users() {
  return <ResourceTable resource="users" title="People" description="The athletes, coaches, and teammates powering OctoFit." columns={[
    { label: 'Name', key: 'name' }, { label: 'Email', key: 'email' }, { label: 'Team', key: 'team', render: (row) => row.team?.name || 'Unassigned' },
  ]} />
}