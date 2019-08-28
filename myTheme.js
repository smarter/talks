const white = '#fffceb'
const black = '#11111f'
const blue = '#2d5dd7'

// Based on book theme
export default {
  fonts: {
    body: '"Crimson Text", Noto Color Emoji, serif',
  },
  googleFont: 'https://fonts.googleapis.com/css?family=Fira+Mono|Source+Sans+Pro|Crimson+Text',
  colors: {
    text: black,
    background: white,
    link: blue,
  },
  // Keep synchronized with custom.css
  monospace: "'Fira Mono', monospace",
}

// const Provider = props => (
//     <div css={{
//       width: "100%",
//       height: "100%",
//     }}>
//     {props.children}
//   </div>
// )


// export default { 
//  // Provider,
//   // Slide: {
//   //   '& > div': {
//   //     width: "80%",
//   //   }
//   // },
//   // font: "'Source Sans Pro', sans-serif",
//   // monospace: "'Fira Mono', monospace",
//   // googleFont: "https://fonts.googleapis.com/css?family=Fira+Mono|Source+Sans+Pro&display=swap"

// }
