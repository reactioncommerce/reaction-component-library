# 2. 12Factor Config from Env

Date: 2018-02-14

## Status

STATUS：accepted

2018-02-14 accepted

## Context

From [12factor.net](https://12factor.net/config):

#### Store config in the environment

An app’s config is everything that is likely to vary between deploys (staging,
production, developer environments, etc). This includes:

* Resource handles to the database, Memcached, and other backing services
* Credentials to external services such as Amazon S3 or Twitter
* Per-deploy values such as the canonical hostname for the deploy

Apps sometimes store config as constants in the code. This is a violation of
twelve-factor, which requires strict separation of config from code. Config
varies substantially across deploys, code does not.

A litmus test for whether an app has all config correctly factored out of the
code is whether the codebase could be made open source at any moment, without
compromising any credentials.

The twelve-factor app stores config in environment variables (often shortened
to env vars or env). Env vars are easy to change between deploys without
changing any code; unlike config files, there is little chance of them being
checked into the code repo accidentally; and unlike custom config files, or
other config mechanisms such as Java System Properties, they are a language-
and OS-agnostic standard.

Another aspect of config management is grouping. Sometimes apps batch config
into named groups (often called “environments”) named after specific deploys,
such as the development, test, and production environments in Rails. This
method does not scale cleanly: as more deploys of the app are created, new
environment names are necessary, such as staging or qa. As the project grows
further, developers may add their own special environments like joes-staging,
resulting in a combinatorial explosion of config which makes managing deploys
of the app very brittle.

In a twelve-factor app, env vars are granular controls, each fully orthogonal
to other env vars. They are never grouped together as “environments”, but
instead are independently managed for each deploy. This is a model that scales
up smoothly as the app naturally expands into more deploys over its lifetime.

## Decision

Follow the twelve-factor advice and use configuration from the environment.

We will centralize the interface for the environment into a single location so
that we can enforce strict requirements on vars. For example, the application
should fail fast if a requirement is not valid. A `PORT` environment variable
should be validated that it is positive number within the accepted port values.

#### Strictness

We're currently using the npm package [`envalid`][1] to provide this
functionality. There are several libraries that serve this purpose.
[`envalid`][1] was specifically chosen because it doesn't have any
functionality that would allow developers to break this decision.

Some libraries allow merge of config files. Some libraries allow usage of
`NODE_ENV`. These features allow (if not encourage) developers to do the wrong
thing.

## Consequences

### Encourage the Right Thing

This decision and the library tooling will encourage developers to build portable,
configurable apps.

### Newcomers may need assistance

Twelve-factor is very popular though there are developers who have not yet
fully embraced it. We will need to teach developers the benefit of providing
configuration from the environment. We can catch practices like flagging on
`NODE_ENV`, in code review.

[1]: https://github.com/af/envalid
