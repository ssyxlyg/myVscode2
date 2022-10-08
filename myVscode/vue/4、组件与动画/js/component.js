// 1、定义组件
		export const btn = {
				template: ` <div>
				  <button type="button" @click='num++'>点击加1</button><br>
				  {{num}}
			   </div>`,
				data() {
					return {
						num: 1
					}
			   }
			}
			
		export	const cir = {
				template: `<div>
				   <button @click='changeR'>切换大小</button>
				   <div :style="{
							'border': '1px solid red',
							'border-radius':'50%',
							'width': r+'px',
							'height': r+'px'
						}">
			       </div>
			   </div>`,
				data() {
					return {
						r: 50
					}
				},
				methods: {
					changeR() {
						this.r = Math.floor(Math.random() * 50 + 50);
					}
				}

			}
