import apisauce from "apisauce";

const baseURL = 'https://fierce-wave-80837.herokuapp.com/';



export const create = () => {
    const api = apisauce.create({
      baseURL,
    });

    const registration = (user: any) =>{

      return api.post('/registration',{
        user: user,
      })

    }

    const authorization = (user: any) =>{

      return api.post('/authorization',{
        user: user,
      })
    }

    const getConferencesBySearchFilter = (text: string) =>{
      return api.get('/conferences/searchFilter',{
        name: text,
      })
    }
    const getConferencesByCategories = (categories: any) =>{
      return api.post('/conferences/multipleFilter',{
        categories: categories,
      })
    }
    const getAllConferences = () => {
        return api.get(`/conferences`);
    };

    const fetchConference = (id:number) =>{
      return api.get(`/conferences/conference/${id}`);
    };
    const fetchSubmitApplication = (application: any) =>{
      api.setHeader('Authorization', `${localStorage.getItem('Token')}`);
      return api.post(`/applications/addApplication`,{
        application: application
      });
    };

    const addConference = (conference: any) =>{
      api.setHeader('Authorization', `${localStorage.getItem('Token')}`);
      return api.post('/conferences/addConference',{
        conference: conference
      })
    }

    const getApplications = () =>{
      api.setHeader('Authorization', `${localStorage.getItem('Token')}`);
      return api.get('/applications');
    };
    const getConfirmedApplications = () =>{
      api.setHeader('Authorization', `${localStorage.getItem('Token')}`);
      return api.get('/applications/confirmedApplications');
    };
    const cancelApplication = (id: number) =>{
      api.setHeader('Authorization', `${localStorage.getItem('Token')}`);
      return api.post('/applications/cancelApplication',{
        id: id,
      })
    }

    const deleteConfirmedApplication = (id: number) =>{
      api.setHeader('Authorization', `${localStorage.getItem('Token')}`);
      return api.post('/applications/deleteConfirmedApplication',{
        id: id,
      })
    }
    const acceptApplication = (id: number) =>{
      api.setHeader('Authorization', `${localStorage.getItem('Token')}`);
      return api.post('/applications/acceptApplication',{
        id: id,
      })
    }
    const getAllCategories = () => {
      return api.get(`/getAllCategories`);
    };


    return {
      getConferencesBySearchFilter,
      registration,
      authorization,
      getConferencesByCategories,
      getAllConferences,
      getApplications,
      fetchConference,
      fetchSubmitApplication,
      cancelApplication,
      acceptApplication,
      getConfirmedApplications,
      deleteConfirmedApplication,
      addConference,
      getAllCategories
    }
};
