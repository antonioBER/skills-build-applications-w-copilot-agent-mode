import ResourceTable from './ResourceTable.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export default function Leaderboard() {
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`
    : '/api/leaderboard/'

  return <ResourceTable endpoint={endpoint} resource="leaderboard" title="Leaderboard" description="A friendly measure of consistency, effort, and team spirit." columns={[
    { label: 'Rank', key: 'rank' }, { label: 'Athlete', key: 'user', render: (row) => row.user?.name || row.user?.email || '—' }, { label: 'Points', key: 'points' }, { label: 'Team', key: 'team', render: (row) => row.team?.name || 'Unassigned' },
  ]} />
}