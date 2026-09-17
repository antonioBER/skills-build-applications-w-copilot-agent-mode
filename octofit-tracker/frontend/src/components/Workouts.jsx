import ResourceTable from './ResourceTable.jsx'

export default function Workouts() {
  return <ResourceTable resource="workouts" title="Workout library" description="A starting point for the next good choice." columns={[
    { label: 'Workout', key: 'name' }, { label: 'Type', key: 'type' }, { label: 'Difficulty', key: 'difficulty' }, { label: 'Duration', key: 'duration' },
  ]} />
}