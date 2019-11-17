import { endent } from '@functions'
import expect from 'expect'
import { exists } from 'fs'
import runCli from './run-cli'

export default () => runCli({
  optionsString: () => {
    const outputFileExpression = 'outputFile(`${value}.txt`, \'\')'
    return endent`{
      options: [
        { name: '--value <value>' },
      ],
      action: ({ value }) => ${outputFileExpression},
    }`
  },
  arguments: ['--value', 'foo'],
  check: async () => expect(await exists('foo.txt')).toBeTruthy(),
})
