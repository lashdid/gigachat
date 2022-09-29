// i get this from https://github.com/Detaysoft/react_chat_elements

import { useEffect } from 'react'
import styles from './InputChat.module.scss'

export default function InputChat({
  type = 'text',
  multiline = false,
  minHeight = 25,
  maxHeight = 100,
  autoHeight = true,
  autofocus = false,
  ...props
}){
  useEffect(() => {
    if (autofocus === true) props.referance?.current?.focus()

    if (props.clear instanceof Function) {
      props.clear(clear)
    }
  }, [])

  const onChangeEvent = (e: any) => {
    if (props.maxlength && (e.target.value || '').length > props.maxlength) {
      if (props.onMaxLengthExceed instanceof Function) props.onMaxLengthExceed()

      if (props.referance?.current?.value == (e.target.value || '').substring(0, props.maxlength)) return
    }

    if (props.onChange instanceof Function) props.onChange(e)

    if (multiline === true) {
      if (autoHeight === true) {
        if (e.target.style.height !== minHeight + 'px') {
          e.target.style.height = minHeight + 'px'
        }

        let height
        if (e.target.scrollHeight <= maxHeight) height = e.target.scrollHeight + 'px'
        else height = maxHeight + 'px'

        if (e.target.style.height !== height) {
          e.target.style.height = height
        }
      }
    }
  }

  const clear = () => {
    var _event = {
      FAKE_EVENT: true,
      target: props.referance?.current,
    }

    if (props.referance?.current?.value) {
      props.referance.current.value = ''
    }

    onChangeEvent(_event)
  }

  return (
    <div className={styles.rce_container_input}>
      {multiline === false ? (
        <input
          ref={props.referance}
          type={type}
          className={styles.rce_input}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          style={props.inputStyle}
          onChange={onChangeEvent}
          onCopy={props.onCopy}
          onCut={props.onCut}
          onPaste={props.onPaste}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onSelect={props.onSelect}
          onSubmit={props.onSubmit}
          onReset={props.onReset}
          onKeyDown={props.onKeyDown}
          onKeyPress={props.onKeyPress}
          onKeyUp={props.onKeyUp}
        />
      ) : (
        <textarea
          ref={props.referance}
          className={`${styles.rce_input} ${styles.rce_input_textarea}`}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          style={props.inputStyle}
          onChange={onChangeEvent}
          onCopy={props.onCopy}
          onCut={props.onCut}
          onPaste={props.onPaste}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onSelect={props.onSelect}
          onSubmit={props.onSubmit}
          onReset={props.onReset}
          onKeyDown={props.onKeyDown}
          onKeyPress={props.onKeyPress}
          onKeyUp={props.onKeyUp}
        ></textarea>
      )}
    </div>
  )
}