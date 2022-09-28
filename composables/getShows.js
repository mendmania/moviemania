import Shows from "~~/models/shows/Shows";
import m from '@/test'

export const getShowsTest = () =>{
    const s = m
    console.log(s)

    const allShows = new Shows()
    allShows.fromData(s)

    const {shows} = allShows
    // save offer response data
    useState('allShows', () => (
        shows
    ));

    
    console.log(shows)

}

export const getShows = async () => {
    const route = useRoute()

    // Access baseURL universally
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase

    var { pending, data } = await $fetch(`${apiBase}shows?genres[]`, {
        // headers: headers,
        async onResponse({ request, response, options }) {
            // Log response
            console.log('[fetch response]', response, process, response.status)


            if (response.status === 400) {
                useState('apiError', () => (
                    {
                        success: response._data.success,
                        status: 400,
                        title: 'error ne api me status code: ' + response.status,
                        response,
                    }
                ));
            }


            const shows = new Shows()
            shows.fromData(response._data.data)
            // save offer response data
            useState('AllShows', () => (
                shows
            ));

        },
        async onRequestError({ request, options, error }) {
            // Log error
            console.log('[fetch request error]', request, error)
        },
        async onResponseError({ request, response, options }) {
            // Log error
            console.log('[fetch response error]', request, response.status, response.body)

            if (response.status === 400) {
                console.error('handle 400 error', response.body)
            }
        }
    })

    return data
}

export const getDetailsByName = async (data) => {
    const route = useRoute()

    // Access baseURL universally
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase

    var res = await $fetch(`${apiBase}singlesearch/shows?q=${data}`, {
        // headers: headers,
        async onResponse({ request, response, options }) {
            // Log response
            console.log('[fetch response]', response, process, response.status)


            // if (response.status === 400) {
            //     useState('apiError', () => (
            //         {
            //             success: response._data.success,
            //             status: 400,
            //             title: 'error ne api me status code: ' + response.status,
            //             response,
            //         }
            //     ));
            // }


            // const shows = new Shows()
            // shows.fromData(response._data.data)
            // // save offer response data
            // useState('AllShows', () => (
            //     shows
            // ));

        },
        async onRequestError({ request, options, error }) {
            // Log error
            console.log('[fetch request error]', request, error)
        },
        async onResponseError({ request, response, options }) {
            // Log error
            console.log('[fetch response error]', request, response.status, response.body)

            if (response.status === 400) {
                console.error('handle 400 error', response.body)
            }
        }
    })
    console.error('data',res)

    return res
}