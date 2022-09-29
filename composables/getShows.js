import Shows from "~~/models/shows/Shows";
import m from '@/test'

export const getShowsTest = () => {
    const s = m
    console.log(s)

    const allShows = new Shows()
    allShows.fromData(s)

    const { shows } = allShows
    // save offer response data
    const actionShows = {
        shows: shows.filter(u => u.genres.includes("Action"))
            .sort((a, b) => (a.rating.average < b.rating.average) ? 1 : -1),
        animationCount: -90,
    }

    const comedyShows = shows.filter(u => u.genres.includes("Comedy"))
        .sort((a, b) => (a.rating.average < b.rating.average) ? 1 : -1)

    const romanceShows = shows.filter(u => u.genres.includes("Romance"))
        .sort((a, b) => (a.rating.average < b.rating.average) ? 1 : -1)

    const horrorShows = shows.filter(u => u.genres.includes("Horror"))
        .sort((a, b) => (a.rating.average < b.rating.average) ? 1 : -1)


    useState('allShowsByGenreAndRating', () => (
        {
            actionShows,
            comedyShows,
            romanceShows,
            horrorShows

        }
    ));

    useState('allShows', () => (
        shows
    ));

    return {
        actionShows,
        comedyShows,
        romanceShows,
        horrorShows

    }

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
            console.log('[fetch response]', response, response.status)


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
            console.log('[fetch response]', response, response.status)


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
    console.error('data', res)

    return res
}

export const getShowsByName = async (data) => {

    // Access baseURL universally
    const config = useRuntimeConfig()
    const apiBase = config.public.apiBase

    var res = await $fetch(`${apiBase}search/shows?q=${data}`, {
        // headers: headers,
        async onResponse({ request, response, options }) {
            // Log response
            console.log('[fetch response]', response, response.status)


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

    const showsBySearch = res.map(c => c.show)
    const shows = new Shows()
    shows.fromData(showsBySearch)

    return shows.shows
}