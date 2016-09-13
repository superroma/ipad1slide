import 'isomorphic-fetch'

const albumUrl = 
'https://picasaweb.google.com/data/feed/api/user/105813937186726192072/albumid/5756577526320306257?alt=json&imgmax=1600'

export const getPicUrls = () => 
    fetch(albumUrl)
        .then(res => 
            res.json()
            .then(json =>
                json.feed.entry.map(e => 
                    e.content.src
                )
            )
        )