import { HeaderController } from '../../controllers/Header/Header.controller'
import { HomeController } from '../../controllers/Home/Home.controller'

export const HomeView = () => {
  return (
    <>
      <HeaderController />
      <HomeController />
    </>
  )
}
