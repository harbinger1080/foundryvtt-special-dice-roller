const base = `
<div class="special-dice-roller">
    <div>
        <form>
            {{#rolls}}
            <input type="checkbox" style="background-image: url('modules/special-dice-roller/public/images/{{system}}/{{imageName}}.png')" name="roll{{rollIndex}}" data-die="{{die}}" data-face="{{face}}" disabled/>
            {{/rolls}}
            {{#canReRoll}}
            <button class="special-dice-roller-reroll" data-roller="{{system}}">re-roll selected</button>
            {{/canReRoll}}
            {{#canKeep}}
            <button class="special-dice-roller-keep" data-roller="{{system}}">keep selected</button>
            {{/canKeep}}
        </form>
    </div>
    <hr>
    <div>
        {{> interpretation}}
    </div>
</div>
`;

export default base;
