export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    return $fetch('https://carapi.app/api/trims/v2/' + query.id)
})
