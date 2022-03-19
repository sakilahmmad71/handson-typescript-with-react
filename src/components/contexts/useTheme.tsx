import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useTheme must be use within a ThemeProvider');
	}

	return context;
};

export default useTheme;
