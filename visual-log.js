class VisualLogPanel {
    _logPanel = document.getElementById('visual-log');

    log(msg) {
        let content;
        if (typeof(msg) !== 'string') {
            content = JSON.stringify(msg);
        } else {
            content = msg;
        }
        this._logPanel.innerText += content + '\n';
    }

    clear() {
        this._logPanel.innerText = '';
    }
}

const visual = new VisualLogPanel();