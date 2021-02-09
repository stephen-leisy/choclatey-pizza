import React from 'react';

export default class PageHeader extends React.Component {
    render() {
        return (
            <header className="sweet-sweet-header">
                <div>
                    <h1>Delicious</h1>
                </div>
                <div className="sweet-sweet-buttons">
                    <button>Friendster</button>
                    <button>Myspace</button>
                    <button>AIM</button>
                </div>
            </header>

        );
    }
}