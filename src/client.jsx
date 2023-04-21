import  { createClient }  from "@sanity/client"

export const client = createClient({
    projectId:'4tfe01dh',
    dataset:"production",
    useCdn:true,
    apiVersion:'2022-04-19'
})