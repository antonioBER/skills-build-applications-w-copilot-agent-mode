import ResourceTable from './ResourceTable.jsx'

export default function Leaderboard() {
  return <ResourceTable resource="leaderboard" title="Leaderboard" description="A friendly measure of consistency, effort, and team spirit." columns={[
    { label: 'Rank', key: 'rank' }, { label: 'Athlete', key: 'user', render: (row) => row.user?.name || row.user?.email || '—' }, { label: 'Points', key: 'points' }, { label: 'Team', key: 'team', render: (row) => row.team?.name || 'Unassigned' },
  ]} />
}