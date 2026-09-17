import ResourceTable from './ResourceTable.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export default function Users() {
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/users/`
    : '/api/users/'

  return <ResourceTable endpoint={endpoint} resource="users" title="People" description="The athletes, coaches, and teammates powering OctoFit." columns={[
    { label: 'Name', key: 'name' }, { label: 'Email', key: 'email' }, { label: 'Team', key: 'team', render: (row) => row.team?.name || 'Unassigned' },
  ]} />
}