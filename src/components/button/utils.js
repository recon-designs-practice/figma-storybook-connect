export function getButtonTypeStyles(type) {
    const lowerCaseType = type.toLowerCase()

    switch (lowerCaseType) {
      case 'primary':
      default:
        return {
          color: '#F2F1EF',
          background: '#0E8AD0',
          border: '2px solid #2D2E31',
          boxShadow: '6px 6px 0px rgba(45, 46, 49, 0.14)'
        }
      case 'secondary':
        return {
          color: '#2D2E31',
          background: '#F2F1EF',
          border: '2px solid #2D2E31',
          boxShadow: '6px 6px 0px rgba(45, 46, 49, 0.14)'
        }
      case 'text':
        return {
          color: '#0E8AD0',
          background: 'none',
          border: 'none',
          boxShadow: 'none'
        }
    }
  }