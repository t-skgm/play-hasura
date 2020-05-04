import { GraphQLResolveInfo, SelectionSetNode } from 'graphql'

// FIXME: temporary.
type FieldRecord = Record<string, any>

const spreadSelectionSet = (selectionSet: SelectionSetNode | undefined): FieldRecord => {
  if (!selectionSet) return {}

  return selectionSet.selections.reduce<FieldRecord>((acc, sel) => {
    if (sel.kind !== 'Field') return acc

    if (sel.selectionSet) {
      acc[sel.name.value] = spreadSelectionSet(sel.selectionSet)
      return acc
    }

    acc[sel.name.value] = 1
    return acc
  }, {})
}

export const getSelectedFields = (info: GraphQLResolveInfo): Record<string, FieldRecord> => {
  const nodes = info.fieldNodes.map(n => [
    n.name.value,
    spreadSelectionSet(n.selectionSet)
  ])
  return Object.fromEntries(nodes)
}
