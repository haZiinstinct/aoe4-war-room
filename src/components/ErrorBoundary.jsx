import { Component } from "react";

// Fängt Render-Fehler ab, damit statt einer weißen Seite eine verständliche
// (zweisprachige) Meldung erscheint. Sitzt außerhalb des LanguageProviders,
// daher bewusst ohne i18n-Kontext und mit statischem DE/EN-Text.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error("WAR ROOM: unerwarteter Fehler / unexpected error", error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="app-error" role="alert">
        <h1>Es ist ein Fehler aufgetreten.</h1>
        <p>
          WAR ROOM konnte nicht geladen werden. Bitte lade die Seite neu.
          <br />
          WAR ROOM failed to load. Please reload the page.
        </p>
        <button type="button" onClick={() => window.location.reload()}>
          Neu laden / Reload
        </button>
      </div>
    );
  }
}
