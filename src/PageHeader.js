import React from 'react';

export default class PageHeader extends React.Component {
    render() {
        return (
            <header className="sweet-sweet-header">
                <div>
                    <h1>Delicious</h1>
                </div>
                <div className="sweet-sweet-buttons">
                    <button>links</button>
                    <button>links</button>
                    <button>links</button>
                </div>
            </header>

        );
    }
}