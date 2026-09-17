import ResourceTable from './ResourceTable.jsx'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export default function Workouts() {
  const endpoint = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
    : '/api/workouts/'

  return <ResourceTable endpoint={endpoint} resource="workouts" title="Workout library" description="A starting point for the next good choice." columns={[
    { label: 'Workout', key: 'name' }, { label: 'Type', key: 'type' }, { label: 'Difficulty', key: 'difficulty' }, { label: 'Duration', key: 'duration' },
  ]} />
}