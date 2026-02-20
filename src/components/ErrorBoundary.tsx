import { Component, type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error("[ErrorBoundary]", error, info.componentStack);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <section className="min-h-screen flex items-center justify-center bg-foreground text-background px-4">
          <div className="text-center max-w-lg">
            <h1 className="text-6xl font-display font-bold mb-4">Oops</h1>
            <p className="text-lg text-background/70 mb-8">
              Etwas ist schiefgelaufen. Bitte lade die Seite neu.
            </p>
            <a
              href="/"
              className="inline-flex items-center h-12 px-6 bg-background text-foreground hover:bg-background/90 rounded-md font-medium group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Zur Startseite
            </a>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
