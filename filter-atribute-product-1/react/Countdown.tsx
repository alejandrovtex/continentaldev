import React from 'react'
import { Dropdown, Button } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'



interface CountdownProps { }

const CSS_HANDLES = ['form', 'selector']

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({ }) => {

  const handles = useCssHandles(CSS_HANDLES)

  const brandCars = [
    { value: 'volkswagen', label: 'Volkswagen'}
  ]

  const models = [
    { value: 'jetta', label: 'Jetta' }
  ]

  const years = [
    { value: '2017', label: '2017' }
  ]

  const versions = [
    { value: '2.0', label: '2.0' }
  ]

  return (
    <div className={`${handles.form} mt7`}>
      <div className={` ${handles.selector} mb2`}>
        <Dropdown
          size="large"
          options={brandCars}
          placeholder='Marca'
        />
      </div>
      <div className={` ${handles.selector} mb2`}>
        <Dropdown
          size="large"
          options={models}
          placeholder='Modelo'

        />
      </div>
      <div className={` ${handles.selector} mb2`}>
        <Dropdown
          size="large"
          options={years}
          placeholder='Año'
        />
      </div>
      <div className={` ${handles.selector} mb2`}>
        <Dropdown
          size="large"
          options={versions}
          placeholder='Version'
        />
      </div>
      <div className="mb7">
        <Button variation="primary" className={` ${handles.selector}`}>Buscar</Button>
      </div>



    </div>

  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default Countdown
