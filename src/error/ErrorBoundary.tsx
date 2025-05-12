import { ErrorBoundary as RcErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/error/ErrorFallback.tsx';

const ErrorBoundary = () => {
  return <RcErrorBoundary fallback={<ErrorFallback />}></RcErrorBoundary>;
};

export default ErrorBoundary;
