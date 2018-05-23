# 5. Test Components

Date: 2018-02-23

## Status

STATUS：accepted

2018-02-23 proposed
2018-03-01 accepted

## Context

Our React Components need to be well tested. At a minimum:

- Snapshots of what is rendered for the most common props, to see when the output changes and confirm that it was intentional.
- Test that all function props are called at the proper time with the proper arguments, as documented.
- Generate a coverage report to prove that everything is tested.

## Decision

Use Jest.

It is popular, backed by Facebook, runs tests in parallel and reruns only changed tests, has built-in coverage, mocking, and `expect` patterns, has a snapshot feature, runs well on CI, and is built on Jasmine, which is battle tested.
