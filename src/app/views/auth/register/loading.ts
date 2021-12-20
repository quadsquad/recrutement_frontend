import { Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'loading',
	template: `		<div id="pause" class="d-flex align-items-center justify-content-center">
									<br><br><br><br><br>
                  <br><br><br><br><br>
                  <br><br>
                  <br><br><br><br><br><div id="spinner"></div>
								</div>`,
	styleUrls: ['loading.scss']
})

export class LoadingComponent {

}
