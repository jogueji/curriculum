import {
  HashRouter as Router, Routes, Route, Navigate
} from 'react-router';
import i18n from './utils/i18n';
import Curriculum from './Curriculum';

function AppRouter() {
	const { language } = i18n;
	return (
    <Router>
      <Routes>
				<Route path={`/${language}`} element={<Curriculum />} />
				<Route path="*" element={<Navigate to={`/${language}`} replace />} />
			</Routes>
    </Router>
  );
}

export default AppRouter;
