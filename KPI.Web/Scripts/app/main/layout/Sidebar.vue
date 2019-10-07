<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../../../../bower_components/admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Henry Pham</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- Sidebar Menu -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">HEADER</li>
        <!-- Optionally, you can add icons to the links -->
        <router-link tag="li"
                     active-class="active"
                     to="/">
          <a><i class="fa fa-link"></i> <span>Home</span></a>
        </router-link>
        <router-link tag="li"
                     active-class="active"
                     to="/client/favourite">
          <a><i class="fa fa-link"></i> <span>Favourite</span></a>
        </router-link>
        <router-link tag="li"
                     active-class="active"
                     to="/client/kpi">
          <a><i class="fa fa-link"></i> <span>KPI</span></a>
        </router-link>

        <router-link tag="li"
                     active-class="active"
                     to="/client/categorykpilevel">
          <a><i class="fa fa-link"></i> <span>Category KPILevel</span></a>
        </router-link>
        <li class="treeview">
          <a>
            <i class="fa fa-link"></i> <span>Admin</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link tag="li"
                         active-class="active"
                         to="/admin/kpi">
              <a><i class="fa fa-link"></i> <span>KPI</span></a>
            </router-link>
            <router-link tag="li"
                         active-class="active"
                         to="/admin/kpilevel">
              <a><i class="fa fa-link"></i> <span>KPI Level</span></a>
            </router-link>
            <router-link tag="li"
                         active-class="active"
                         to="/admin/level">
              <a><i class="fa fa-link"></i> <span>Level</span></a>
            </router-link>
            <router-link tag="li"
                         active-class="active"
                         to="/admin/category">
              <a><i class="fa fa-link"></i> <span>Category</span></a>
            </router-link>
            <router-link tag="li"
                         active-class="active"
                         to="/admin/account">
              <a><i class="fa fa-link"></i> <span>Account</span></a>
            </router-link>
            <router-link tag="li"
                         active-class="active"
                         to="/admin/accountlevel">
              <a><i class="fa fa-link"></i> <span>Account Level</span></a>
            </router-link>
            <router-link tag="li"
                         active-class="active"
                         to="/admin/categorykpilevel">
              <a><i class="fa fa-link"></i> <span>Category KPI Level</span></a>
            </router-link>
          </ul>
        </li>
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {

  }
</script>

<style scoped>
</style>
