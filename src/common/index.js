import axios from 'axios'

export const requestApi = async ({ path, method = 'get', data = {}, params={}, success, fail, common }) => {
  try{
    const result = await axios({
      method,
      url: `https://problem.comento.kr${ path }`,
      params,
      data
    })
    switch(result.status){
      case 200:
        success && success(result.data); 
        break
      case 500:
        alert('오류가 발생했습니다')
        fail && fail()
        break
      default: break
    }
    common && common()

  }catch(err){
    console.error(err)
  }

}