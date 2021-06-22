# joplin-batch-web

Handles some batch operations that are not supported by Joplin itself, and presents them as a visual interface.

- [x] Check for unreferenced attachment resources
      Some unused attachment resources are not cleaned up in time
- [x] Check for referenced attachment resources that do not exist
      Some attachments that are being used may not exist for various reasons
- [x] Convert external links to internal note references
      Would like to be able to convert previous blog links to internal `:/id` links to ensure they never expire
- [ ] Check for notes that don't have a parent directory (usually an error)

## FAQ

### Why not use the cli form

The cli form is not very suitable for this scenario, e.g. when you need to preview unusual attachments or notes, which is more troublesome at the command line.