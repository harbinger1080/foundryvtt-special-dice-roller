const tpl = `
<ul>
{{#results}}
    {{#successes}}
    <li>Successes: {{successes}}</li>
    {{/successes}}
    {{#stressFailures}}
    <li>Stress: {{stressFailures}}</li>
    {{/stressFailures}}
{{/results}}
</ul
`;

export default tpl;
