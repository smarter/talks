const white = '#fffceb'
const black = '#11111f'
const blue = '#2d5dd7'

// Based on book theme
export default {
  fonts: {
    body: 'Lora, Noto Color Emoji, serif',
  },
  googleFont: 'https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700|Source+Sans+Pro:400,400i,700,700i|Crimson+Text:400,400i,600,600i,700,700i|Lora:400,400i,700,700i',
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
