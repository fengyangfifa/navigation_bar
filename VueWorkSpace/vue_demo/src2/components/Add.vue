<template>
  <div>
    <div class="col-md-4">
      <form class="form-horizontal">
        <div class="form-group">
          <label for>用户名</label>
          <input type="text" class="form-control" placeholder="用户名" v-model="name" />
        </div>
        <div class="form-group">
          <label for>评论内容</label>
          <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			content: ''
		}
	},
	props:{
		addComment: {
			type: Function,
			required: true
		}
	},
	methods: {
		add () {
			const name = this.name.trim();
			const content = this.content.trim();
			if (!name || !content){
				alert('输入不能为空');
				return ;
			}
			const comment = {
				name,
				content
			};
			this.addComment(comment);
			this.name = this.content = '';
		}
	},
};
</script>

<style>
</style>