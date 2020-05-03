## Hasura CLI

```bash
# export metadata
$ hasura metadata export

# apply exported metadata
$ hasura metadata apply

# Create migration from db
$ hasura migrate create "MIGRATION-NAME" --from-server
```