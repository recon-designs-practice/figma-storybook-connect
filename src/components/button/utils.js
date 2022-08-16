export function getButtonTypeStyles(type) {
    const lowerCaseType = type.toLowerCase()

    switch (lowerCaseType) {
      case 'primary':
      default:
        return {
          color: '#F2F1EF',
          background: '#0E8AD0',
          hoverBackground: '#0C76B2',
          activeBackground: '#0B6BA1',
          border: '2px solid #2D2E31',
          boxShadow: '6px 6px 0px rgba(45, 46, 49, 0.14)',
          activeBoxShadow: 'none'
        }
      case 'secondary':
        return {
          color: '#2D2E31',
          background: '#F2F1EF',
          hoverBackground: '#E0DFDE',
          activeBackground: '#CCCBC9',
          border: '2px solid #2D2E31',
          boxShadow: '6px 6px 0px rgba(45, 46, 49, 0.14)',
          activeBoxShadow: 'none'
        }
      case 'text':
        return {
          color: '#0E8AD0',
          background: 'none',
          hoverBackground: '#E0DFDE',
          activeBackground: '#CCCBC9',
          border: 'none',
          boxShadow: 'none',
          activeBoxShadow: 'none'
        }
    }
  }