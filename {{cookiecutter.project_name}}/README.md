# {{cookiecutter.project_name}}

[![Build Status](https://travis-ci.org/{{cookiecutter.github_username}}/{{cookiecutter.project_name}}.svg?branch=master)](https://travis-ci.org/{{cookiecutter.github_username}}/{{cookiecutter.project_name}})
[![Build status](https://ci.appveyor.com/api/projects/status/{{cookiecutter.appveyor_id}}/branch/master?svg=true)](https://ci.appveyor.com/project/{{cookiecutter.github_username}}/{{cookiecutter.project_name}}/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/{{cookiecutter.github_username}}/{{cookiecutter.project_name}}/badge.svg?branch=master)](https://coveralls.io/github/{{cookiecutter.github_username}}/{{cookiecutter.project_name}}?branch=master)

{{cookiecutter.description}}

## Usage

## Contributing

Run unit tests and build before pushing/opening a pull request

- `npm test` - lint and test
- `npm start` - watch and build, etc with alarmist
- `npm run build` - run tests then build
- `npm run watch` - watch for changes and run build
- `npm run ci` - run build and submit coverage to coveralls
