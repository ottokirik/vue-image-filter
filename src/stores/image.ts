import { defineStore } from 'pinia';

export const useImageStore = defineStore('image', {
	state: (): ImageState => ({
		file: null,
		filter: '',
	}),

	actions: {
		upload(event: DragEvent) {
			if (!event.dataTransfer) return;

			const [tempFile] = event.dataTransfer.files;

			if (!/image.*/.exec(tempFile.type)) return;

			this.file = tempFile;
		},
	},
});

type ImageState = {
	file: File | null;
	filter: string;
};
