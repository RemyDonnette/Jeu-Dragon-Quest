export function changerScript(sourceScript) {

    const head = document.querySelector('head')
    const scriptJS = document.querySelector('#scriptJS')
    const nouveauScriptJS = document.createElement('script')
    nouveauScriptJS.src = `${sourceScript}?t=${new Date().getTime()}`;
    nouveauScriptJS.type = 'module'
    nouveauScriptJS.id = 'scriptJS'
    scriptJS.remove()
    head.append(nouveauScriptJS)
}