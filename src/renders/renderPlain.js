
const render = (ast) =>`Section 'common'
Property 'common.setting1' wasn't changed
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to [complex value]
Section 'common.setting6'
Property 'common.setting6.key' wasn't changed
Property 'common.setting6.ops' was added with value: vops
Property 'common.follow' was added with value: false
Property 'common.setting4' was added with value: blah blah
Property 'common.setting5' was added with value: [complex value]
Section 'group1'
Property 'group1.baz' was updated. From bas to bars
Property 'group1.foo' wasn't changed
Property 'group1.nest' was updated. From [complex value] to str
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;




export default render;
