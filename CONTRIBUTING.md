## Contributing

- Issue name template: `<issue_type>: <name_of_issue>`:

  - `<issue_type>`: feat, docs, fix, refactor, chore, revert,...
  - Example: `feat: do somethings`

- Branch name template: `<issue_type>/<issue_id>-<name_of_issue>`:

  - `<issue_type>`: feat, docs, fix, refactor, chore, revert,...
  - Example: `feat/123-do-somethings`.

- Commit template: `<issue_type>: <name_of_issue>`:

  - Example: `feat: do somethings`.

- Pull request template:

  - Title: `<issue_type>: <name_of_issue>`. Example: `feat: do somethings`.
  - Description: Describe detail pr (if pr is so simple, do not need it), reference to issue_id.
  - Example for description:
    - `- Do somethings`
    - `- Close: #123`
  - Add more information in right side.

- Merging:

  - Only allow `Squash and Merge` option.
  - Add `<issue_type>` before default title. Example: `feat: do somethings (#123)`.
