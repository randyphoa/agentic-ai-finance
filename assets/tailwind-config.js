tailwind.config = {
  theme: {
    extend: {
      colors: {
        ibm: {
          // Gray (dominant - 80%)
          'gray-100': '#161616',
          'gray-90': '#262626',
          'gray-80': '#393939',
          'gray-70': '#525252',
          'gray-60': '#6F6F6F',
          'gray-50': '#8D8D8D',
          'gray-40': '#A8A8A8',
          'gray-30': '#C6C6C6',
          'gray-20': '#E0E0E0',
          'gray-10': '#F4F4F4',
          gray: '#525252',         // Alias for gray-70

          // Blue (primary accent - 15%)
          'blue-100': '#001141',
          'blue-90': '#001D6C',
          'blue-80': '#002D9C',
          'blue-70': '#0043CE',
          'blue-60': '#0F62FE',
          'blue-20': '#D0E2FF',
          'blue-10': '#EDF5FF',
          blue: '#0F62FE',         // Alias for blue-60

          // Cyan
          'cyan-50': '#1192E8',
          'cyan-40': '#33B1FF',
          'cyan-30': '#82CFFF',
          'cyan-20': '#BAE6FF',
          'cyan-10': '#E5F6FF',

          // Red
          'red-60': '#DA1E28',
          'red-50': '#FA4D56',
          'red-30': '#FFB3B8',
          'red-20': '#FFD7D9',
          'red-10': '#FFF1F1',
          red: '#DA1E28',          // Alias for red-60

          // Magenta
          'magenta-60': '#D02670',
          'magenta-50': '#EE5396',
          'magenta-30': '#FFAFD2',
          'magenta-20': '#FFD6E8',
          'magenta-10': '#FFF0F7',

          // Purple
          'purple-60': '#8A3FFC',
          'purple-50': '#A56EFF',
          'purple-30': '#D4BBFF',
          'purple-20': '#E8DAFF',
          'purple-10': '#F6F2FF',
          purple: '#8A3FFC',       // Alias for purple-60

          // Teal
          'teal-60': '#007D79',
          'teal-50': '#009D9A',
          'teal-30': '#3DDBD9',
          'teal-20': '#9EF0F0',
          'teal-10': '#D9FBFB',
          teal: '#009D9A',         // Alias for teal-50

          // Green
          'green-60': '#198038',
          'green-50': '#24A148',
          'green-30': '#6FDC8C',
          'green-20': '#A7F0BA',
          'green-10': '#DEFBE6',
          green: '#198038',        // Alias for green-60

          // Yellow
          'yellow-30': '#F1C21B',
          'yellow-20': '#FDDC69',
          'yellow-10': '#FCF4D6',
        }
      }
    }
  }
}
