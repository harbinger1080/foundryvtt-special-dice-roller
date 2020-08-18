const tpl = `
<ul>
{{#results}}
    {{#successes}}
    <li>Successes: {{successes}}</li>
    {{/successes}}
    {{#failures}}
    <li>Failure</li>
    {{/failures}}
    {{#stressFailures}}
    <li>Stress: {{stressFailures}}</li>
    {{/stressFailures}}
{{/results}}
</ul
`;

export default tpl;
