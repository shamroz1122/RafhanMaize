const initState = {
  error:null,
  upperSection:{},
  middleSection:{},
  footerSection:{}
}

const dashboardReducer = (state = initState, action) => {
  switch(action.type){
  
    case 'GET_DASHBAORD_STATS_SUCCESS':
      return {
        ...state,
        error:null,
        upperSection:action.upperSection,
        middleSection:action.middleSection,
        footerSection:action.footerSection
      }
      case 'GET_DASHBAORD_STATS_ERROR':
      return {
        ...state,
        error:action.msg,
        upperSection:{},
        middleSection:{},
        footerSection:{}
  
      }
      default:
        return state
  } 

}

export default dashboardReducer 