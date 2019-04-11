import React from 'react'
// import axios from '@fs/zion-axios'

// eslint-disable-next-line import/prefer-default-export
export function useBaconIpsum({ defaultValue = '' } = {}) {
  const [baconIpsum, setBaconIpsum] = React.useState(defaultValue)
  React.useEffect(() => {
    const url = `https://baconipsum.com/api/?paras=1&type=meat-and-filler&start-with-lorem=1&make-it-spicy=1`
    // const url = `https://corporatebs-generator.sameerkumar.website/`
    const headers = { Accept: 'application/json' }
    // axios
    //   .get(url, { headers })
    fetch(url, { headers })
      .then(res => console.log(res) || res.json())
      // .then(res => res.data)
      .catch(err => {
        console.error(`Couldn't fetch bacon ipsum! 😭`, err)
        return ''
      })
      .then(setBaconIpsum)
  }, [])
  return baconIpsum
}
